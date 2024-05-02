"use client";

import useUploadModal from "@/hooks/useUploadModal";
import { Modal } from "./Modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { Input } from "./Input";
import { CustomButton } from "./CustomButton";
import toast from "react-hot-toast";
import { useUser } from "@/hooks/useUser";
import uniqid from "uniqid";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

export const UploadModal = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const uploadModal = useUploadModal();
  const { user } = useUser();
  const supabaseClient = useSupabaseClient();

  // Parameters from react-hook-forms & their initial state value
  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      author: "",
      title: "",
      song: null,
      image: null,
    },
  });

  // onChange function will close the opened modal
  const onChange = (open: boolean) => {
    if (!open) {
      reset();
      uploadModal.onClose();
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    try {
      setIsLoading(true);

      // imageFile & songFile would be 1st object of the list
      const imageFile = values.image?.[0];
      const songFile = values.song?.[0];

      // If either image, song or user is not there, return the request & not proceed the function further on.
      if (!imageFile || !songFile || !user) {
        toast.error("Missing input fields");
        return;
      }

      // Generates the random ID to make it unique in database bucket
      const uniqueID = uniqid();

      // For Song
      // Refactor the parameters of supabaseClient storage, select the 'songs' bucket/table & upload the file name with unique id and title
      const { data: songData, error: songError } = await supabaseClient.storage
        .from("songs")
        .upload(`song-${values.title}-${uniqueID}`, songFile, {
          cacheControl: "3600",
          upsert: false,
        });

      // If any error in this process, return an error.
      if (songError) {
        setIsLoading(false);
        return toast.error("Failed song upload.");
      }

      // For Image
      // Refactor the parameters of supabaseClient storage, select the 'images' bucket/table & upload the file name with unique id and title
      const { data: imageData, error: imageError } =
        await supabaseClient.storage
          .from("images")
          .upload(`image-${values.title}-${uniqueID}`, imageFile, {
            cacheControl: "3600",
            upsert: false,
          });

      // If any error in this process, return an error.
      if (imageError) {
        setIsLoading(false);
        return toast.error("Failed image upload.");
      }

      // For any overall supabase error
      // Refactor the parameters of supabaseClient, select the 'songs' table, insert the following parameters into table.
      const { error: supabaseError } = await supabaseClient
        .from("songs")
        .insert({
          user_id: user.id,
          title: values.title,
          author: values.author,
          image_path: imageData.path,
          song_path: songData.path,
        });

      // If any error in this process, return an error message.
      if (supabaseError) {
        setIsLoading(false);
        return toast.error(supabaseError.message);
      }

      // Else, refresh the router, close modal, give toast message of success & reset the input fields to null.
      router.refresh();
      setIsLoading(false);
      toast.success("Song uploaded!");
      reset();
      uploadModal.onClose();
    } catch (e) {
      // Dislpay the error in catch block
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      title="Add a song"
      description="Upload an mp3 file"
      isOpen={uploadModal.isOpen}
      onChange={onChange}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
        {/* Input Field for title */}
        <Input
          id="title"
          disabled={isLoading}
          {...register("title", { required: true })}
          placeholder="Song title"
          autoComplete="off"
        />
        {/* Input Field for author */}
        <Input
          id="author"
          disabled={isLoading}
          {...register("author", { required: true })}
          placeholder="Song artist"
          autoComplete="off"
        />

        {/* Container for MP3 song file */}
        <div>
          <div className="pb-1">Select a MP3 song file</div>
          {/* Input for mp3 song file */}
          <Input
            id="song"
            type="file"
            disabled={isLoading}
            autoComplete="off"
            accept=".mp3"
            {...register("song", { required: true })}
          />
        </div>

        {/* Container for cover image file */}
        <div>
          <div className="pb-1">Select a cover image</div>
          {/* Input for image file */}
          <Input
            id="image"
            type="file"
            autoComplete="off"
            disabled={isLoading}
            accept="image/*"
            {...register("image", { required: true })}
          />
        </div>
        {/* Form ends with a create button which proceeds the request */}
        <CustomButton disabled={isLoading} type="submit">
          Create
        </CustomButton>
      </form>
    </Modal>
  );
};

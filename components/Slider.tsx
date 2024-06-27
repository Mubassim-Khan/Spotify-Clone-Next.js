"use client";

import * as RadixSlider from "@radix-ui/react-slider";

type SliderProps = {
  value?: number;
  onChange?: (value: number) => void;
  orientation?: "horizontal" | "vertical";
};

export const Slider = ({
  value = 1,
  onChange,
  orientation = "horizontal",
}: SliderProps) => {
  const handleChange = (newValue: number[]) => {
    onChange?.(newValue[0]);
  };
  return (
    <RadixSlider.Root
      className={`relative flex ${
        orientation === "vertical"
          ? "flex-col w-[20px] h-[100px]"
          : "flex-row w-[100px] h-[20px]"
      } items-center select-none touch-none overflow-hidden rounded-full cursor-pointer`}
      defaultValue={[1]}
      value={[value]}
      onValueChange={handleChange}
      max={1}
      step={0.01}
      orientation={orientation}
      aria-label="Volume">
      <RadixSlider.Track
        className={`bg-neutral-600 relative grow rounded-full ${
          orientation === "vertical" ? "w-[10px]" : "h-[5px]"
        }`}>
        <RadixSlider.Range
          className={`absolute bg-white rounded-full ${
            orientation === "vertical" ? "w-[100%]" : "h-full"
          }`}
        />
      </RadixSlider.Track>
    </RadixSlider.Root>
  );
};

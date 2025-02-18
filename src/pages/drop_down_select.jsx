import {
	CheckIcon,
	ChevronDownIcon,
	ChevronUpIcon,
} from "@radix-ui/react-icons";
import PropTypes from "prop-types";
import { Select } from "radix-ui";
import { forwardRef } from "react";

const DropDownSelect = ({ label, options }) => (
	<div className="flex w-fit flex-col items-center justify-center bg-red-500">
		<Select.Root className="relative inline-flex w-fit min-w-40 flex-col gap-1 bg-amber-900">
			<Select.Trigger
				className="inline-flex h-12 items-center justify-center gap-2 rounded bg-white px-[15px] text-[13px] text-violet11 leading-none shadow-[0_2px_10px] shadow-black/10 outline-none hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9"
				aria-label={label}
			>
				<Select.Value placeholder={label} />
				<Select.Icon className="text-violet11">
					<ChevronDownIcon />
				</Select.Icon>
			</Select.Trigger>
			<Select.Portal className="flex gap-10 ">
				<Select.Content className="overflow-hidden rounded-md bg-gray-300 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
					<Select.ScrollUpButton className="flex h-6 cursor-default items-center justify-center text-violet11">
						<ChevronUpIcon />
					</Select.ScrollUpButton>
					<Select.Viewport className="cursor-pointer p-[5px]">
						<Select.Group className="flex flex-col gap-2">
							<Select.Label className="px-[25px] text-white text-xs leading-[25px]">
								{label}
							</Select.Label>
							{options?.map(({ id, label }) => (
								<SelectItem
									key={id}
									value={label}
									className=" cursor-pointer hover:bg-amber-600 focus:bg-amber-600"
								>
									{label}
								</SelectItem>
							))}
						</Select.Group>
					</Select.Viewport>
					<Select.ScrollDownButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-violet11">
						<ChevronDownIcon />
					</Select.ScrollDownButton>
				</Select.Content>
			</Select.Portal>
		</Select.Root>
	</div>
);

DropDownSelect.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			value: PropTypes.string.isRequired,
		}),
	).isRequired,
};

const SelectItem = forwardRef(
	({ children, className, ...props }, forwardedRef) => {
		return (
			<Select.Item
				className="relative flex h-[25px] select-none items-center rounded-[3px] pr-[35px] pl-[25px] text-[13px] text-violet11 leading-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1 data-[highlighted]:outline-none"
				{...props}
				ref={forwardedRef}
			>
				<Select.ItemText>{children}</Select.ItemText>
				<Select.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
					<CheckIcon />
				</Select.ItemIndicator>
			</Select.Item>
		);
	},
);

export { DropDownSelect };

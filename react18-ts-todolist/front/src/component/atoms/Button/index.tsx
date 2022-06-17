import { BasicButton } from "./style";

export const Size = {
  SMALL: 'SMALL',
  MEDIUM: 'MEDIUM',
  LARGE: 'LARGE',
} as const;

export const Type = {
  PRIMARY: 'PRIMARY',
  BASIC: 'BASIC',
  TEXT: 'TEXT',
} as const;

type TSize = typeof Size[keyof typeof Size];
type TType = typeof Type[keyof typeof Type];

const Button = ({ label, size, type, onClick }: { label: string; size: TSize, type: TType, onClick: () => void; }) => {
  return (
    <BasicButton className={type}>{label}</BasicButton>
  )
};

export default Button;

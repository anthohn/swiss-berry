interface ButtonProps {
  children: string;
}

export default function Title2({ children }: ButtonProps) {
  return (
        <h2 className='text-5xl lg:text-6xl font-medium leading-tight'>
          {children}
        </h2>
    )
}

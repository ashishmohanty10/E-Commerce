type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-[1100px] mx-auto  min-h-screen flex flex-col ">
      {children}
    </div>
  );
}

export const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      <div className="mx-auto max-w-screen-md">
        <main>{props.children}</main>
        <footer className="border-t border-gray-300 py-8 text-center text-sm">
          © Copyright 2025 LUVTRY Design Studio.
        </footer>
      </div>
    </div>
  );
};

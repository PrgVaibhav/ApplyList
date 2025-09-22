import React from "react";

const Container = ({
  children,
  cn,
}: {
  children: React.ReactNode;
  cn?: string;
}) => {
  return (
    <section className={`container mx-auto px-4 py-4 ${cn}`}>
      {children}
    </section>
  );
};

export default Container;

type TypographyType = {
  className?: string;
  children: React.ReactNode;
};

function Typography(props: TypographyType) {
  return <p {...props} className={`text-sm ${props.className} `} />;
}

Typography.Heading = function Heading(props: TypographyType) {
  return (
    <h2
      {...props}
      className={`${props.className} md:text-[64px] md:leading-[75px] tracking-tight leading-11  text-4xl font-proximaNova text-center sm:text-left`}
    >
      {props.children}
    </h2>
  );
};

Typography.SubHeading = function SubHeading(props: TypographyType) {
  return (
    <h2
      {...props}
      className={`${props.className} text-gray-700 sm:text-2xl text-sm font-primary text-center sm:text-left`}
    >
      {props.children}
    </h2>
  );
};

Typography.Headers = function Headers(props: TypographyType) {
  return (
    <h2
      {...props}
      className={`text-center sm:text-3xl text-2xl font-proximaNova ${props.className}`}
    >
      {props.children}
    </h2>
  );
};
Typography.PageHeaders = function PageHeaders(props: TypographyType) {
  return (
    <h2
      {...props}
      className={`text-center sm:text-[270px] text-[80px] font-secondary font-[900] ${props.className}`}
    >
      {props.children}
    </h2>
  );
};

Typography.H2 = function H2(props: TypographyType) {
  return (
    <h2
      {...props}
      className={`text-2xl font-secondary font-semibold ${props.className}`}
    >
      {props.children}
    </h2>
  );
};

Typography.H3 = function H3(props: TypographyType) {
  return (
    <h2
      {...props}
      className={`text-xl font-secondary font-semibold ${props.className}`}
    >
      {props.children}
    </h2>
  );
};

Typography.H4 = function H4(props: TypographyType) {
  return (
    <h4
      {...props}
      className={`text-lg font-secondary font-semibold ${props.className}`}
    >
      {props.children}
    </h4>
  );
};
Typography.H5 = function H5(props: TypographyType) {
  return (
    <h5
      {...props}
      className={`text-md font-secondary font-semibold ${props.className}`}
    >
      {props.children}
    </h5>
  );
};

Typography.Text = function Text(props: TypographyType) {
  return (
    <h2
      {...props}
      className={`text-base font-[200] font-secondary ${props.className}`}
    >
      {props.children}
    </h2>
  );
};

Typography.SubText = function SubText(props: TypographyType) {
  return (
    <h2
      {...props}
      className={`text-sm font-secondary text-gray-600 tracking-[-0.02em] ${props.className}`}
    >
      {props.children}
    </h2>
  );
};

Typography.MicroText = function MicroText(props: TypographyType) {
  return (
    <span
      {...props}
      className={`text-xs font-primary text-gray-600 ${props.className}`}
    >
      {props.children}
    </span>
  );
};

export default Typography;

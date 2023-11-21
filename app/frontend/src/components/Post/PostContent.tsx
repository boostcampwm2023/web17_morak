type PostContentProps = {
  content: string;
};

export function PostContent({ content }: PostContentProps) {
  return <div>{content}</div>;
}

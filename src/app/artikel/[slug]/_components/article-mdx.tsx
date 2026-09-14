import type { MDXComponents } from 'mdx/types';

export const articleMDXComponents: MDXComponents = {
  // MDX memakai `#` untuk judul isi; hero halaman sudah punya satu <h1>,
  // jadi turunkan satu tingkat agar outline tetap satu h1 tanpa skip level.
  h1: (props) => <h2 className="text-xl font-bold mt-6 mb-3" {...props} />,
  h2: (props) => <h3 className="text-lg font-bold mt-4 mb-2" {...props} />,
  h3: (props) => <h4 className="text-base font-bold mt-3 mb-2" {...props} />,
  p: (props) => <p className="mb-4 text-slate-700 leading-relaxed" {...props} />,
  ul: (props) => <ul className="list-disc ms-4 space-y-1 mb-4" {...props} />,
  ol: (props) => <ol className="list-decimal ms-4 space-y-1 mb-4" {...props} />,
  strong: (props) => <strong className="font-semibold" {...props} />,
  hr: () => <hr className="my-6 border-slate-200" />,
};

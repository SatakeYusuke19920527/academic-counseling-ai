// import Link from 'next/link';

// interface CheckboxProps {
//   paramKey: string;
//   tags: string[];
//   searchParams: { [key in string]: string | string[] | undefined };
// }

// const Checkbox = ({ paramKey, tags, searchParams }: CheckboxProps) => {
//   // タグが選択中であるか
//   const isSelected = (tag: string) => {
//     const param = searchParams[paramKey];
//     return typeof param === 'string' && param.split('+').includes(tag);
//   };

//   // タグの選択を追加 or 解除する
//   const getNewParams = (tag: string) => {
//     // string 型であるパラメータのみを抽出
//     const newParams: { [key in string]: string } = {};
//     for (const [key, value] of Object.entries(searchParams)) {
//       if (typeof value === 'string') {
//         newParams[key] = value;
//       }
//     }
//     if (!newParams[paramKey]) {
//       newParams[paramKey] = '';
//     }
//     const oldTags = newParams[paramKey].split('+');
//     const newKeys = oldTags.includes(tag)
//       ? oldTags.filter((key) => key !== tag)
//       : [...oldTags, tag];
//     newParams[paramKey] = newKeys.join('+');

//     return new URLSearchParams(newParams);
//   };

//   return (
//     <ul>
//       {tags.map((tag) => (
//         <li key={tag}>
//           <Link href={`?${getNewParams(tag)}`}>
//             {tag} {isSelected(tag) && '選択中'}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default Checkbox;
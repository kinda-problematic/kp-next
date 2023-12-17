// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "./dropdown-menu";
// import {
//   DropdownItem,
//   DropdownLink,
//   TOP_NAV_DROPDOWN_ITEMS,
// } from "@/constants/top-nav-dropdown-items";
// import Link from "next/link";

// // <DropdownMenu key={i}>
// //   <DropdownMenuTrigger className="capitalize">
// //     {item.name}
// //   </DropdownMenuTrigger>
// //   <DropdownMenuContent>
// //     <DropdownMenuItem>
// //       <Link href={`/${item.name}`} className="h-full w-full capitalize">
// //         All {item.name}
// //       </Link>
// //     </DropdownMenuItem>
// //     <DropdownMenuSeparator />
// //     {item.links.map((link: DropdownLink, i: any) => (
// //       <DropdownMenuItem key={i}>
// //         <Link href={link.href} className="h-full w-full capitalize">
// //           {link.name}
// //         </Link>
// //       </DropdownMenuItem>
// //     ))}
// //   </DropdownMenuContent>
// // </DropdownMenu>

// export const NavDropDown = () => {
//   return TOP_NAV_DROPDOWN_ITEMS.map((item: DropdownItem, i: any) => (
//     <DropdownMenu key={i}>
//       <DropdownMenuTrigger className="capitalize">
//         {item.name}
//       </DropdownMenuTrigger>
//       <DropdownMenuContent>
//         <DropdownMenuItem>
//           <Link href={`/${item.name}`} className="h-full w-full capitalize">
//             All {item.name}
//           </Link>
//         </DropdownMenuItem>
//         <DropdownMenuSeparator />
//         {item.links.map((link: DropdownLink, i: any) => (
//           <DropdownMenuItem key={i}>
//             <Link href={link.href} className="h-full w-full capitalize">
//               {link.name}
//             </Link>
//           </DropdownMenuItem>
//         ))}
//       </DropdownMenuContent>
//     </DropdownMenu>
//   ));
// };

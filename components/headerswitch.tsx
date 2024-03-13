import Link from 'next/link';
import { Button } from "@/components/ui/button";

const Headerswitch = () => {
  return (
    <ul className="flex gap-4 justify-center">
      <li className="mr-4">
        <Link href="/">
          <Button className="text-white hover:underline focus:outline-none cursor-pointer">Home</Button>
        </Link>
      </li>
      <li className="mr-4">
        <Link href="/handyman">
          <Button className="text-white hover:underline focus:outline-none cursor-pointer">handyman</Button>
        </Link>
      </li>
      <li className="mr-4">
        <Link href="/posts">
          <Button className="text-white hover:underline focus:outline-none cursor-pointer">posts</Button>
        </Link>
      </li>
    </ul>
  );
};

export default Headerswitch;


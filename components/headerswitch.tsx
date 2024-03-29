import Link from 'next/link';
import { Button } from "@/components/ui/button";




const Headerswitch = () => {
  return (
    <ul className="bg-primary text-primary-foreground  flex gap-4 justify-center">
      <li className="mr-4">
        <Link href="/clients">
          <Button className="text-white hover:underline focus:outline-none cursor-pointer">clients</Button>
        </Link>
      </li>
      <li className="mr-4">
        <Link href="/contractors">
        <Button className="text-white hover:underline focus:outline-none cursor-pointer">contractors</Button>
        </Link>

      </li>
    </ul>
  );
};

export default Headerswitch;

 
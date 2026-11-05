import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Brand() {
  return (
    <Link href="/" className="brand" aria-label={`${site.name} home`}>
      <Image src="/elite-digital-logo.svg" alt="" width={205} height={38} />
    </Link>
  );
}

import Link from "next/link";
import { PER_PAGE } from "@/config/index";
export default function pagination({ total, page }) {
  const lastPage = Math.ceil(total / PER_PAGE);
  return (
    <div>
      {page > 1 && (
        <Link href={`/events?page=${page - 1}`}>
          <a className="btn-secondary">Previous</a>
        </Link>
      )}

      {page < lastPage && (
        <Link href={`/events?page=${page + 1}`}>
          <a className="btn-secondary">next</a>
        </Link>
      )}
    </div>
  );
}

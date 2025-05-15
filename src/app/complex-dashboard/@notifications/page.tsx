import Link from 'next/link';
import { Card } from '@/components/card';
export default function Notifications() {
  return (
    <Card>
        <div>Notifications</div>
        <div>
            <Link href='/complex-dashboard/archived'>View Archived Notifications</Link>
        </div>
    </Card>
  );
}
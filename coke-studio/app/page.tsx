import SendMessage from '@/components/send-message';
import { ModeToggle } from '@/components/ui/mode-toggle';

export default function Home() {
  return (
    <>
      <div className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center gap-10">
        <ModeToggle />
        <SendMessage />
      </div>
    </>
  );
}

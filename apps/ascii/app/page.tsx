export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
      <pre className="font-mono text-muted-foreground text-xs leading-tight">
        {String.raw`                    _ _
  __ _ ___  ___ (_|_)
 / _' / __|/ __|| | |
| (_| \__ \ (__ | | |
 \__,_|___/\___||_|_|`}
      </pre>
      <h1 className="font-mono text-2xl">ascii/cnlibs</h1>
      <p className="text-muted-foreground">
        ascii-styled shadcn-based ui library
      </p>
    </main>
  );
}

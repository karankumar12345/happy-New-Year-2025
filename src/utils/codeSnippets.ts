const snippets = [
    'console.log("Hello 2025!");',
    'print("New Year, New Code")',
    'System.out.println("2025");',
    'fmt.Println("Go 2025!")',
    'echo "Happy Coding!";',
    'puts "Ruby 2025"',
  ];
  
  export function generateCodeSnippet(): string {
    return snippets[Math.floor(Math.random() * snippets.length)];
  }
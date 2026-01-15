
interface PistonResponse {
  language: string;
  version: string;
  run: {
    stdout: string;
    stderr: string;
    output: string;
    code: number;
    signal: string | null;
  };
}

export const executeCode = async (language: string, code: string): Promise<string> => {
  try {
    const response = await fetch('https://emkc.org/api/v2/piston/execute', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        language: language,
        version: "*",
        files: [
          {
            content: code,
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`Execution failed: ${response.statusText}`);
    }

    const data: PistonResponse = await response.json();
    return data.run.output;
  } catch (error) {
    console.error('Piston Error:', error);
    return error instanceof Error ? error.message : 'An unknown error occurred';
  }
};

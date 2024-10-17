# Preview

## Visit F1RST AI Site

[https://ai.f1rst.id](https://ai.f1rst.id)

# Demo Video:

[https://www.youtube.com/embed/u6JP3LHBueg?si=QUxIhbgu_yNSvwYn](https://youtu.be/u6JP3LHBueg?si=RC5DGM32VgijzmFu)


Here’s a rewritten version suitable for a `README.md` file on GitHub:

---

# F1rstGPT

F1rstGPT is a web interface for ChatGPT, developed using Next.js and the OpenAI Chat API. It is compatible with both OpenAI and Azure OpenAI accounts.

## Features

- **AI Code Generation**: F1rstGPT can generate code snippets based on natural language prompts, helping developers accelerate their coding process.

- **Code Chat**: The platform provides a conversational interface where developers can discuss their coding challenges and receive real-time assistance.

- **Code Search**: F1rstGPT includes a feature to search the web for code-related topics, allowing developers to find solutions to specific coding problems.

These features aim to streamline development workflows by providing quick, context-aware support.


# Development

## Running Locally

1. **Install Node.js 20**.
2. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Set up environment variables**:
   - Copy `.env.example` to `.env.local` and update the necessary environment variables.
5. **Start the application**:
   ```bash
   npm run dev
   ```
6. **Visit** `http://localhost:3000` in your browser.

## Running Locally with Docker

1. **Clone the repository** and navigate to the root directory:
   ```bash
   cd <repository-directory>
   ```
2. **Update the `OPENAI_API_KEY`** environment variable in the `docker-compose.yml` file.
3. **Build the application**:
   ```bash
   docker-compose build
   ```
4. **Start the application**:
   ```bash
   docker-compose up -d
   ```

## Environment Variables

### Required Environment Variables

#### For OpenAI Account:

| Name                       | Description                                                         | Default Value                       |
|----------------------------|---------------------------------------------------------------------|-------------------------------------|
| `OPENAI_API_BASE_URL`     | Use if you plan to use a reverse proxy for api.openai.com.         | `https://api.openai.com`           |
| `OPENAI_API_KEY`          | Secret key string obtained from the OpenAI API website.             |                                     |
| `OPENAI_MODEL`            | Model of GPT used                                                   | `gpt-3.5-turbo`                    |

#### For Azure OpenAI Account:

| Name                           | Description                                       |
|--------------------------------|---------------------------------------------------|
| `AZURE_OPENAI_API_BASE_URL`   | Endpoint (e.g., `https://xxx.openai.azure.com`) |
| `AZURE_OPENAI_API_KEY`        | Key                                               |
| `AZURE_OPENAI_DEPLOYMENT`      | Model deployment name                             |


# MCP Server

Vacano UI provides an [MCP](https://modelcontextprotocol.io/) (Model Context Protocol) server with full library documentation. Connect it to your AI coding assistant to get accurate, up-to-date information about components, props, usage patterns, and utilities.

## What is MCP?

Model Context Protocol is an open standard that allows AI assistants to access external tools and data sources. By connecting the Vacano UI MCP server, your AI assistant gets direct access to the library documentation and can provide accurate code suggestions.

## Server URL

```
https://tools.vacano.io/ui/mcp
```

## Setup

### Claude Code

Add the server to your project configuration:

```bash
claude mcp add vacano-ui --transport http https://tools.vacano.io/ui/mcp
```

Or add it manually to `.mcp.json` in your project root:

```json
{
  "mcpServers": {
    "vacano-ui": {
      "type": "http",
      "url": "https://tools.vacano.io/ui/mcp"
    }
  }
}
```

### Cursor

Open **Settings > MCP** and add a new server:

- **Name**: `vacano-ui`
- **Type**: `http`
- **URL**: `https://tools.vacano.io/ui/mcp`

Or add it to `.cursor/mcp.json` in your project root:

```json
{
  "mcpServers": {
    "vacano-ui": {
      "type": "http",
      "url": "https://tools.vacano.io/ui/mcp"
    }
  }
}
```

### Windsurf

Add the server to `~/.codeium/windsurf/mcp_config.json`:

```json
{
  "mcpServers": {
    "vacano-ui": {
      "type": "http",
      "url": "https://tools.vacano.io/ui/mcp"
    }
  }
}
```

### Other MCP Clients

Any MCP-compatible client can connect using the HTTP transport:

- **Transport**: HTTP
- **URL**: `https://tools.vacano.io/ui/mcp`

Refer to your client's documentation for specific configuration steps.

## Usage

Once connected, your AI assistant will automatically have access to Vacano UI documentation. You can ask it to:

- Generate components with the correct props and patterns
- Look up available props, variants, and sizes for any component
- Write forms, layouts, and common UI patterns using the library
- Use the correct imports from `@vacano/ui`, `@vacano/ui/icons`, and `@vacano/ui/lib`

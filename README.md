# Rivet Sandbox

[Visit the Rivet Sandbox](https://sandbox.rivet.game)

This repo is a Rivet game built to provide examples of interacting with Rivet APIs.

## Development

### Step 1: Setup Rivet

```
rivet init
```

### Step 2: Run

**Terminal A**

Open a terminal and run `npm start` to start the WebSocket server.

**Terminal B**

 Open a terminal and run `npm run serve` to start the local server.

 ### Step 3: Visit

Visit http://127.0.0.1:5000

Any changes to the frontend will automatically reload. The server needs to be manually restarted.

## Deploying

```
rivet deploy -n prod
```


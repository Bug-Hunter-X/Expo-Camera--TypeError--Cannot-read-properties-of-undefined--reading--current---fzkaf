# Expo Camera `cameraRef` undefined Error

This repository demonstrates a common error encountered when using the Expo Camera API: attempting to access the `cameraRef` before it's fully initialized. This typically occurs within a `useEffect` hook before the component has mounted and the camera is ready. The error manifests as a `TypeError: Cannot read properties of undefined (reading 'current')`, indicating `cameraRef.current` is undefined.

## Problem

The provided `bug.js` file shows the incorrect implementation where `cameraRef.current` is accessed before the component's mount and camera initialization. This leads to the error.

## Solution

The `bugSolution.js` file demonstrates the correct approach using the `cameraRef` only after ensuring it's initialized and ready. The solution utilizes a conditional check to verify `cameraRef.current` before accessing its properties.

## How to reproduce

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `expo start` to start the Expo development server.
4. Observe the error in the original `bug.js` file.
5. Compare it with the corrected code in `bugSolution.js`.
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ASSEMBLY_AI_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}


interface Window {
  electronAPI: {
    showWidget: () => Promise<any>;
    hideWidget: () => Promise<any>;
    closeWidget: () => Promise<any>;
    startRecording: () => Promise<any>;
    stopRecording: () => Promise<any>;
    transcribeAudio: (audioPath: string) => Promise<any>;
    saveToDocx: (content: string, filename: string) => Promise<any>;
    minimizeWindow: () => Promise<any>;
    maximizeWindow: () => Promise<any>;
    closeWindow: () => Promise<any>;
    minimizeRecordingWidget: () => Promise<any>;
    closeRecordingWidget: () => Promise<any>;
    getRecordings: () => Promise<any>;
    getAppPath: () => Promise<string>;
    selectDirectory: () => Promise<{ canceled: boolean; path: string | null }>;
    fetchCalendarEvents: () => Promise<any>;
    createCalendarEvent: (payload: any) => Promise<any>;
    summarizeWithOpenAI: (payload: any) => Promise<any>;
    onRecordingStateChange: (callback: (state: any) => void) => void;
    openMicrophoneSettings: () => Promise<any>;
    openCameraSettings: () => Promise<any>;
    getSettings: () => Promise<{ geminiApiKey?: string; assemblyAiKey?: string; geminiModel?: string }>;
    saveSettings: (settings: { geminiApiKey?: string; assemblyAiKey?: string; geminiModel?: string }) => Promise<{ success: boolean }>;
  };
}

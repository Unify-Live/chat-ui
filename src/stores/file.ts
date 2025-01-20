// stores/file.ts
import { defineStore } from "pinia";
import { getBackendUrl } from "../appConfig";
import { ref } from "vue";

export const useFilesStore = defineStore("filesStore", () => {
  const fileCache = ref<Map<string, string>>(new Map());

  async function getFile(fileUuid: string): Promise<string> {
    // Return cached URL if exists
    if (fileCache.value.has(fileUuid)) {
      return fileCache.value.get(fileUuid)!;
    }

    const token = localStorage.getItem("userToken") || "";
    
    try {
      const response = await fetch(`${getBackendUrl()}/files/core/${fileUuid}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch file');
      }

      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      
      fileCache.value.set(fileUuid, objectUrl);
      return objectUrl;

    } catch (error) {
      console.error('Error fetching file:', error);
      throw error;
    }
  }

  // Cleanup function
  function clearCache() {
    fileCache.value.forEach(url => URL.revokeObjectURL(url));
    fileCache.value.clear();
  }

  return {
    getFile,
    clearCache
  };
});

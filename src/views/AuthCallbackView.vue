<template>
<div class="auth-callback">
    <div v-if="isLoading" class="loading">
    <p>Authenticating... Please wait</p>
    </div>
    <div v-if="error" class="error">
    <p>{{ error }}</p>
    </div>
</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const isLoading = ref(true);
const error = ref(null);
const route = useRoute();

const exchangeCodeForTokens = async (code) => {
try {
    const response = await fetch(
    "https://localhost:5000/exchange-code-for-token/",
    {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
    }
    );

    if (!response.ok) {
    throw new Error("Token exchange failed");
    }

    return await response.json();
} catch (err) {
    console.error("Token exchange error:", err);
    throw err;
}
};

const handleAuthentication = async () => {
try {
    // Extract the authorization code from the query parameters
    const code = route.query.code;

    if (!code) {
    throw new Error("No authorization code found");
    }

    console.log("Authorization code:", code);

    // Exchange the code for tokens
    const tokens = await exchangeCodeForTokens(code);

    console.log("Tokens received:", tokens);

    // Perform any necessary actions with the tokens here
    isLoading.value = false;
} catch (err) {
    error.value = err.message;
    isLoading.value = false;
}
};

onMounted(() => {
handleAuthentication();
});
</script>

<style scoped>
.auth-callback {
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
text-align: center;
}

.loading,
.error {
font-size: 1.2rem;
}

.error {
color: red;
}
</style>
  
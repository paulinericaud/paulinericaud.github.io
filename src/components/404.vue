<script setup lang="ts">
import router from '@/router';
</script>

<template>
    <div>
        <div>
            <h2>404 - Page not found</h2>
            <p>Sorry, we couldn't find this page. Maybe it was moved or deleted.</p>
        </div>
    </div>
</template>

<style lang="css" scoped>
select{
    display: none;
}
div > div {
    width: 100%;
}
main > div {
    display: flex;
    position: absolute;
    align-items: center;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
}
</style>
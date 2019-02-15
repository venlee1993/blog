<template>
    <div class="type">
        <ul class="type-nav">
            <li class="link">
                <router-link to="/recommend">推荐</router-link>
            </li>
            <li class="link">
                <router-link to="/concern">关注</router-link>
            </li>
            <li class="link">
                <router-link to="/hot">热点</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Link"
    };
</script>

<style lang="less" scoped>
    .type-nav {
        display: flex;
        margin-bottom: 0;
        .link {
            padding: 0 0.875rem;
            border-left: 1px solid hsla(0, 0%, 59.2%, 0.2);
        }
        .link:first-child {
            padding-left: 0;
            border-left: none;
        }
    }
</style>

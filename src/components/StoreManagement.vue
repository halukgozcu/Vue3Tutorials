<template>
    <div>
        <p>Add pinia store management via
            <code>npm install pinia pinia-plugin-persistedstate
        </code>
        </p>
        <p>Then change main.js like below

            <code>
                import { createPinia } from 'pinia';
                import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
 
                const pinia = createPinia();
                pinia.use(piniaPluginPersistedstate);

                createApp(App).use(pinia).mount('#app')
            </code>
        </p>
        <br />
        <hr />
        <br />
        <div>
            <p>Persisted state example : <input type="text" v-model="persistedName" placeholder="Enter name" /></p>
            <br />
            <p> When you refresh the page, this field should remain as its latest updated value : {{ persistedName }}
            </p>
            <br />
        </div>
        <div>
            <p>Unpersisted state example : <input type="text" v-model="unpersistedName" placeholder="Enter name" /></p>
            <br />
            <p> When you refresh the page, this field should return its inital value : {{ unpersistedName }}
            </p>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { usePersistenceStore } from '../stores/PersistenceStore.js';
import { useUnpersistenceStore } from '../stores/UnpersistenceStore.js';

const persistenceStore = usePersistenceStore();
const unpersistenceStore = useUnpersistenceStore();

const persistedName = computed({
    get: () => persistenceStore.userName,
    set: (value) => persistenceStore.setUserName(value)
});

const unpersistedName = computed({
    get: () => unpersistenceStore.userName,
    set: (value) => unpersistenceStore.setUserName(value)
});
</script>

<style lang="scss" scoped></style>
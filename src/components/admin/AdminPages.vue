<template>
    <div>
        <PageTittle icon="fa fa-cogs" main="Administração"
            sub="Cadastros & Cia" />
        <div class="admin-pages-tabs">
            <b-card no-body>
                <b-tabs card>
                    <b-tab title='Artigos' active>
                        <ArticleAdmin />
                    </b-tab>
                    <b-tab title='Categorias'>
                        <CategoryAdmin />
                    </b-tab>
                    <b-tab title='Usuários'>
                        <UserAdmin />
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>

<script>
import PageTittle from '../template/PageTittle'
import ArticleAdmin from './ArticleAdmin'
import CategoryAdmin from './CategoryAdmin'
import UserAdmin from './UserAdmin'

export default {
    name: 'AdminPages',
    components: { PageTittle, ArticleAdmin, CategoryAdmin, UserAdmin }
}
</script>

<style>

</style>
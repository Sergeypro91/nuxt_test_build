export default function({ store, redirect }) {
  if (!store.getters['auth/iasAuthenticated']) {
    redirect('/admin/login?message=login')
  }
}

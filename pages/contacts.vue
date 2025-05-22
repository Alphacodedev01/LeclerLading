<template>
  <div>
    <h1>{{ $t('contact.title') }}</h1>
    <form>
      <div>
        <label>{{ $t('contact.form.name') }}</label>
        <input type="text" />
      </div>
      <div>
        <label>{{ $t('contact.form.email') }}</label>
        <input type="email" />
      </div>
      <div>
        <label>{{ $t('contact.form.message') }}</label>
        <textarea></textarea>
      </div>
      <button type="submit">{{ $t('contact.form.submit') }}</button>
    </form>
  </div>
</template>

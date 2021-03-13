<template>
  <div class="container mx-auto py-4">
    <nav>
      <div class="md:flex md:items-center md:justify-around">
        <div class="flex items-center justify-between ml-4">
          <a href="#">
            <img
              src="@/assets/img/logo.jpg"
              alt="Logo UP2M"
              class="object-cover md:justify-between "
            />
          </a>
          <font-awesome-icon
            icon="bars"
            class="text-primary md:hidden cursor-pointer mr-4"
          />
        </div>
        <div class="md:flex md:items-center text-left px-4 ">
          <a
            href="#"
            class="text-primary hover:bg-primary hover:text-white px-4 py-2 block "
            >Home</a
          >
          <a
            href="#"
            class="text-primary hover:bg-primary hover:text-white px-4 py-2 block "
            >About</a
          >
          <a
            href="#"
            class="text-primary hover:bg-primary hover:text-white px-4 py-2 block "
            >Authors</a
          >
          <a
            href="#"
            class="text-primary hover:bg-primary hover:text-white px-4 py-2 block "
            >Sources</a
          >
        </div>
        <div class="md:flex md:items-center text-left px-5 py-2 mt-2 ">
          <button
            class="border-2 rounded-md text-primary border-primary px-4 py-2  hover:bg-primary hover:text-white cursor-pointer"
          >
            <a href="#">Masuk</a>
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>

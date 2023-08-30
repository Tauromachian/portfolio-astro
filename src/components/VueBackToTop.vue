<template>
  <button
    title="Go to top"
    class="hidden rounded-lg w-12 h-12 fixed z-50 outline-none border-2 bg-transparent transition-all transition-500 text-2xl bottom-7 right-7 shake-horizontal floating-button"
    :class="isShowingClasses"
    @click="topFunction"
  >
    <SocialIconsBase
      class="ml-2 z-70"
      icon="arrow-up"
      width="28px"
      height="30px"
    />
  </button>
</template>

<script>
import SocialIconsBase from "./SocialIconsBase.vue";

export default {
  components: {
    SocialIconsBase,
  },
  name: "VueBackToTop",
  data() {
    return {
      colorIcons: "",
      floatingButton: null,
      isShowing: false,
    };
  },
  computed: {
    isShowingClasses() {
      if (this.isShowing) {
        return {
          "floating-button--show": true,
        };
      }
      return {};
    },
  },

  mounted() {
    this.floatingButton = document.getElementById("floating-button");
    window.onscroll = () => {
      this.scrollFunction(this.floatingButton);
    };
  },
  methods: {
    scrollFunction() {
      document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
        ? (this.isShowing = true)
        : (this.isShowing = false);
    },
    topFunction() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.floating-button {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.floating-button--show {
  display: block;
  animation: roll 1s;
}

.shake-horizontal {
  -webkit-animation: shake-horizontal 0.6s
    cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
  animation: shake-horizontal 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
}

@-webkit-keyframes shake-horizontal {
  0%,
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70% {
    -webkit-transform: translateX(-8px);
    transform: translateX(-8px);
  }
  20%,
  40%,
  60% {
    -webkit-transform: translateX(6px);
    transform: translateX(6px);
  }
  80% {
    -webkit-transform: translateX(6px);
    transform: translateX(6px);
  }
  90% {
    -webkit-transform: translateX(-6px);
    transform: translateX(-6px);
  }
}
@keyframes shake-horizontal {
  0%,
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70% {
    -webkit-transform: translateX(-10px);
    transform: translateX(-10px);
  }
  20%,
  40%,
  60% {
    -webkit-transform: translateX(10px);
    transform: translateX(10px);
  }
  80% {
    -webkit-transform: translateX(8px);
    transform: translateX(8px);
  }
  90% {
    -webkit-transform: translateX(-8px);
    transform: translateX(-8px);
  }
}
</style>

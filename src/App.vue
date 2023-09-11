<script setup lang="ts">
import { onMounted, ref } from 'vue';
import BulletPoint from './components/BulletPoint.vue';
import * as EmailValidator from 'email-validator'

type EmailState
  = { kind: 'not-entered' }
  | { kind: 'valid' }
  | { kind: 'invalid' }

onMounted(() => {
  document.body.className = 'font-roboto'
})

const emailState = ref({ kind: 'not-entered' } as EmailState)
const emailInput = ref('')

const onInput = (event: Event) => {
  const input = (event.target as HTMLInputElement).value
  emailInput.value = input
  console.log(input)
}

const onSubmit = () => {
  const state = EmailValidator.validate(emailInput.value)
    ? { kind: 'valid' }
    : { kind: 'invalid' }
  emailState.value = state as EmailState
}

const inputStyling = (state: EmailState): Array<string> => {
  return state.kind === 'invalid'
    ? ['bg-tomato/10', 'border-tomato', 'text-tomato']
    : ['border-grey/50']
}

</script>

<template>

  <!-- Success Page -->
  <div v-if="emailState.kind === 'valid'"
    class="
      desktop:flex
      desktop:flex-col
      desktop:items-center
      desktop:justify-center
      desktop:min-h-screen
      desktop:bg-dark-slate-gray
      ">

    <!-- Card -->
    <div class="
      flex 
      flex-col
      items-start 
      justify-between 
      min-h-screen
      mx-6

      desktop:flex
      desktop:flex-col
      desktop:items-center
      desktop:justify-center
      desktop:gap-10
      desktop:min-h-fit
      desktop:w-[32rem]
      desktop:h-[32rem]
      desktop:p-16
      desktop:rounded-[2rem]
      desktop:bg-white
      ">

      <!-- Top Content -->
      <div class="
        flex 
        flex-col 
        gap-10 
        mt-36
        
        desktop:mt-0
        ">
        <img class="w-16" src="./assets/icon-success.svg">
        <p class="
          text-[30pt] 
          font-bold 
          leading-[30pt] 
          -mb-4
          desktop:text-[40pt]
          desktop:leading-[40pt]
          ">Thanks for subscribing!</p>
        <p>
          A confirmation email has been sent to 
          <span class="font-bold">{{ emailInput }}</span>.
          Please open it and click the button inside to confirm your 
          subscription.
        </p>      
      </div>

    <!-- Dismiss Button -->
    <p class="        
      w-full 
      p-4
      mb-10 
      
      text-center 
      rounded-lg 
      font-bold 
      text-white 
      bg-dark-slate-gray

      desktop:mb-0
      "
      >Dismiss Message</p>        
    </div>
  </div>

  <!-- Landing Page -->
  <div v-if="emailState.kind !== 'valid'"
    class="
      flex 
      flex-col 
      justify-center 
      items-center 
      min-h-screen
      
      desktop:bg-dark-slate-gray
      ">

    <!-- Card -->
    <div class="
      flex 
      flex-col 
      justify-start 
      items-center
      
      desktop:flex-row-reverse
      desktop:gap-10
      desktop:p-6
      desktop:rounded-[2rem]
      desktop:bg-white
      ">
      <img class="desktop:hidden" src="./assets/illustration-sign-up-mobile.svg" alt="banner">
      <img class="hidden desktop:block" src="./assets/illustration-sign-up-desktop.svg" alt="banner">

      <!-- Content -->
      <div class="
        flex 
        flex-col 
        gap-6 
        m-6
        
        desktop:p-2
        desktop:w-[24rem]
        ">
        <p class="text-[30pt] font-bold -mb-2 text-dark-slate-gray desktop:text-[40pt]">Stay updated!</p>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>

        <!-- List -->
        <div class="flex flex-col gap-2">
          <BulletPoint :content="'Product discovery and building what matters'"></BulletPoint>
          <BulletPoint :content="'Measuring to ensure updates are a success'"></BulletPoint>
          <BulletPoint :content="'And much more!'"></BulletPoint>
        </div>

        <!-- Email Input -->
        <div class="relative flex flex-col mt-2 gap-2">
          <p v-if="emailState.kind === 'invalid'"
            class="absolute right-0 text-xs text-tomato font-bold"> Valid email required</p>
          <p class="text-xs font-bold">Email address</p>
          <input 
            class="w-full p-4 outline-none rounded-lg border-solid border-[1px]" 
            :class="inputStyling(emailState)"
            type="text"
            placeholder="email@company.com" @input="onInput">
        </div>

        <!-- Subscribe Button -->
        <p class="
          w-full 
          p-4 
          
          text-center 
          rounded-lg 
          font-bold 
          text-white 
          bg-dark-slate-gray
          
          hover:bg-gradient-to-l from-tomato to-orange
          hover:cursor-pointer
          "
          @click="onSubmit"
          >Subscribe to monthly newsletter</p>
      </div>
    </div>
  </div>
</template>
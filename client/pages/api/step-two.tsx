import { Layout } from "@/components/form/FormLayout"
import { StepsLayout } from "@/components/form/StepsLayout"
import { Step } from "@/components/form/Step"
import { TextInput } from "@/components/form/inputs/TextInput"

const StepOne = () => {
  return (
    // generic layout for all pages
    <Layout>
      {/* <!--specific layout only for steps with progression bar--> */}
      <StepsLayout>
        {/* <!--step 1--> */}
        {/* <!--navigating to the home page and step 2 respectively--> */}
        <Step back='/' next='/step-two'>
          <div className='flex flex-col gap-4'>
            {/* <!--simple text input--> */}
            <TextInput labelText='Qual o seu nome?' />
          </div>
        </Step>
      </StepsLayout>
    </Layout>
  )
}

export default StepOne
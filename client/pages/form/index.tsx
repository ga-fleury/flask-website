import { useState } from "react";
import { Inter } from 'next/font/google'
import Head from "next/head";
import { Conditional } from "../../components/ConditionalRender"
import StepOne from "../api/step-one";
import StepTwo from "../api/step-two";

const inter = Inter({ subsets: ['latin'] })

export default function FormPage() {

    const [formStep, setFormStep] = useState(0);

    const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

    const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

    return (
        <main className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}>
            <Head>
                <title>Form</title>
            </Head>
            <Conditional showWhen={formStep === 0}>
                <StepOne />
            </Conditional>
            <Conditional showWhen={formStep === 1}>
                <StepTwo />
            </Conditional>
        </main>
    )
}
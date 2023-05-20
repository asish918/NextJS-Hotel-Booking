'use client'

import axios from "axios"
import { FcGoogle } from "react-icons/fc"
import { signIn } from 'next-auth/react'
import { useCallback, useState } from "react"
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form'

import useRegisterModal from "../../hooks/useRegisterModal"
import useLoginModal from "../../hooks/useLoginModal"
import Modal from "./Modal"
import Heading from "../Heading"
import Input from "../inputs/Input"
import toast from "react-hot-toast"
import Button from "../Button"
import { useRouter } from "next/navigation"

const LoginModal = () => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        signIn('credentials', {
            ...data,
            redirect: false,
        }).then((callback) => {
            setIsLoading(false)
            
            if(callback?.error){
                toast.error(callback.error);
            }
            else if(callback?.ok){
                toast.success('Logged In')
                router.refresh();
                loginModal.onClose();
            }

        });
    }

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading
                title="Welcome back"
                subtitle="Login to your account!"
            />
            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                type="email"
                required
            />

            <Input
                id="password"
                label="Password"
                type="password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    );

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr />
            <Button
                outline
                label="Continue with Google"
                icon={FcGoogle}
                onClick={() => {signIn('google')}}
            />

            <div className="text-neutral-500 text-center mt-4 font-light">
                <div className="flex flex-row items-center gap-2 justify-center">
                    <div>
                        Already have an account?
                    </div>
                    <div 
                        className="text-rose-500 cursor-pointer hover:underline"
                        onClick={registerModal.onClose}
                    >
                        Log In
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <Modal
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title="Login"
            actionLabel="Continue"
            onClose={loginModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default LoginModal
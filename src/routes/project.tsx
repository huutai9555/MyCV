import { Modal } from "antd"
import React, { useRef, useState } from "react";
import Image from "../components/image";
import { useParams, useSearchParams } from "react-router-dom";
import Project1 from "../components/project1";
import Project2 from "../components/project2";
import Project3 from "../components/project3";
import Project4 from "../components/project4";

type Props = {}


  

export default function Project({ }: Props) {
    const {id} = useParams();

    

    const handleShowProject = (id: string) => {
        switch(id) {
            case ('1'): {
                return <Project1 />
            }
            case ('2'): {
                return <Project2 />
            }
            case ('3'): {
                return <Project3 />
            }
            case ('4'): {
                return <Project4 />
            }
            default: {
                return ''
            }
        }
    }
    console.log(id)

    return (
        handleShowProject(id as string)
    )
}
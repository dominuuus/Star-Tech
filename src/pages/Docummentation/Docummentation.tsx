import { Header } from "../../components/common/Header/Header";
import { DocummentationContainer, DocummentationContent } from "./Docummentation.styles";

export function Docummentation() {
    return (
        <>
            <DocummentationContainer>
                <Header/>

                <DocummentationContent>
                    <span>Documentation Content</span>
                </DocummentationContent>
            </DocummentationContainer>
        </>
    )
}
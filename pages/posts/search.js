import {useFormik} from "formik";
import * as Yup from "yup";
import {MainLayout} from "../../components/MainLayout";
import {FormBody} from "../../components/FormComponents/FormBody"
import {TextField} from "../../components/FormComponents/TextField";
import {useRouter} from "next/router";

const formValidation = Yup.object().shape({
    title: Yup.string().trim().max(30, `Too Long`).min(3, "Too Short").required(`Title is required`),
    // author: Yup.string().trim()
})

const SearchPosts = () => {
    const router = useRouter()

    const formik = useFormik({
        initialValues: {
            title: ``,
            // author: ``,
        },
        validationSchema: formValidation,
        onSubmit: () => {
            router.push({
                pathname: `/posts`,
                query: formik.values
            })
        }
    })

    return (
        <MainLayout title={`Search Posts`}>
            {/*<form onSubmit={formik.handleSubmit}>*/}
            {/*    <div>*/}
            {/*        <label htmlFor="title">*/}
            {/*            Title*/}
            {/*        </label>*/}
            {/*        <input*/}
            {/*            type="text"*/}
            {/*            name="title"*/}
            {/*            placeholder="Title"*/}
            {/*            value={formik.values.title}*/}
            {/*            onChange={formik.handleChange}*/}
            {/*            onBlur={formik.handleBlur}*/}
            {/*        />*/}
            {/*        {formik.errors.title && (*/}
            {/*            <div>*/}
            {/*                {formik.errors.title}*/}
            {/*            </div>*/}
            {/*        )}*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <label htmlFor="author">*/}
            {/*            Author*/}
            {/*        </label>*/}
            {/*        <input*/}
            {/*            type="text"*/}
            {/*            name="author"*/}
            {/*            placeholder="Author"*/}
            {/*            value={formik.values.author}*/}
            {/*            onChange={formik.handleChange}*/}
            {/*            onBlur={formik.handleBlur}*/}
            {/*        />*/}
            {/*        {formik.errors.author && (*/}
            {/*            <div>*/}
            {/*                {formik.errors.author}*/}
            {/*            </div>*/}
            {/*        )}*/}
            {/*    </div>*/}
            {/*    <button type="submit">*/}
            {/*        Search*/}
            {/*    </button>*/}
            {/*</form>*/}

            <FormBody
                onSubmit={formik.handleSubmit}
                buttonLabel={`Search`}
            >
                <TextField
                    label={`Very Big Enormous Large Title`}
                    name={`title`}
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.title}
                />
                {/*<TextField*/}
                {/*    label={`Author`}*/}
                {/*    name={`author`}*/}
                {/*    value={formik.values.author}*/}
                {/*    onChange={formik.handleChange}*/}
                {/*    onBlur={formik.handleBlur}*/}
                {/*    error={formik.errors.author}*/}
                {/*/>*/}
            </FormBody>

        </MainLayout>
    )
}

export default SearchPosts

interface Props {
    params: Promise<{
        projectId: string;
    }>
};

export const Page = async ({ params }: Props) => {
    const { projectId } = await params;

    return (
        <div>
        Project ID: {projectId}
        </div>
    );
}
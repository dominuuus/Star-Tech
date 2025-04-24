export function ProjectProgress() {
    return (
        <>
            <progress value={10} max={100} />
          <progress value={20} max={100} />
          <progress value={30} max={100} />
          <progress value={50} max={100} />
          <progress value={90} max={100} />
          <progress value={100} max={100} />
        </>
    )
}
const doSomething = () => {
    return Promise.resolve({ value: 'Roman' })
}

const reportErrorMessage = ({ message }: { message: string }) => {
    // report
    console.log('error message', message);
}

const getErrorMessage = (err: unknown) => {
    if (err instanceof Error) return err.message;
    return String(err);
}

type Result = {
    value: string;
}

async function handleClick() {
    try {
        const result: Result = await doSomething();
        console.log(result.value);
    }
    catch (err) {
        reportErrorMessage({ message: getErrorMessage(err) });
    }
}
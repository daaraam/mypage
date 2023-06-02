const lines = [
    {
        line: "대사1번",
        says: "219화",
    },
    {
        line: "대사2번.",
        says: "219화",
    },
    {
        line: "대사3번.",
        says: "214화",
    },
    {
        line: "대사4번.",
        says: "304화(5)",
    },
    {
        line: "대사5번.",
        says: "297화",
    },
    {
        line: "대사6번.",
        says: "297화",
    },
    {
        line: "대사7번.",
        says: "298화",
    },
    {
        line: "대사8번.",
        says: "212화",
    },
    {
        line: "대사9번.",
        says: "259화",
    },
    {
        line: "대사10번.",
        says: "290화",
    }
];

const line = document.querySelector("#lines span:first-child")
const says = document.querySelector("#lines span:last-child")
const todaysLines = lines[Math.floor(Math.random() *lines.length)];

line.innerText = todaysLines.line;
says.innerText = todaysLines.says;
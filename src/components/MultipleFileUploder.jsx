/* eslint-disable react/prop-types */
import { useState } from "react";
import { TbPlus } from "react-icons/tb";

const MultipleFileUploader = ({ attachments, setAttachments }) => {
    const [selectedAttachments, setSelectedAttachments] = useState([]);
    const handleSelectedAttachments = (id) => {
        const isAttachmentExist = selectedAttachments?.find((attachment) => attachment === id);
        if (!isAttachmentExist) {
            setSelectedAttachments((prev) => [...prev, id]);
        } else {
            const remainingAttachments = selectedAttachments?.filter((attachment) => attachment !== id);
            setSelectedAttachments(remainingAttachments);
        }
    };


    const handleDeletedAttachments = () => {
        const remainingAttachments = attachments?.filter(
            (attachment) => !selectedAttachments.includes(attachment?.id)
        );
        setAttachments(remainingAttachments);
        setSelectedAttachments([]);
    };


    const handleAddAttachment = (e) => {
        e.preventDefault();
        const addAttachments = e.target.files;

        const newAttachments = Array.from(addAttachments).map((file, index) => {
            const id = index + 1;
            const fileUrl = URL.createObjectURL(file);
            return { id, name: file.name, file: fileUrl, fileType: file.type };
        });

        setAttachments((prevAttachments) => [...prevAttachments, ...newAttachments]);
    };

    return (
        <div className="card" style={{ height: "100%" }}>
            <div style={{ padding: "10px" }}>
                <div>
                    <div

                        className="flex justify-between items-center m-4"
                    >
                        <div className="flex items-center gap-3">
                            <div>
                                {selectedAttachments?.length > 0 && (
                                    <input
                                        type="checkbox"
                                        checked={selectedAttachments?.length > 0}
                                        className="w-4 h-4 mt-1"
                                        onClick={() => setSelectedAttachments([])}
                                    />
                                )}
                            </div>
                            <div className="font-bold text-sm" >
                                {selectedAttachments?.length > 0
                                    ? `${selectedAttachments?.length} Files Selected`
                                    : "Add Attachments"}
                            </div>
                        </div>
                        <div
                            onClick={handleDeletedAttachments}
                            style={{
                                cursor: "pointer",
                                fontWeight: "600",
                                fontSize: "0.875rem",
                                color: "#ff0000",
                            }}
                        >
                            {selectedAttachments?.length > 0 && (
                                <span>
                                    {selectedAttachments?.length === 1 ? "Delete file" : "Delete files"}
                                </span>
                            )}
                        </div>
                    </div>
                    <hr />


                    <div className="p-2">
                        <ul>
                            {attachments?.map((attachment) => (
                                <li
                                    key={attachment.id}

                                    className="flex justify-between p-3 border border-[#ddd] rounded mb-2 "
                                >
                                    <span>{attachment.name}</span>
                                    <input
                                        type="checkbox"
                                        checked={selectedAttachments?.includes(attachment.id)}
                                        onChange={() => handleSelectedAttachments(attachment.id)}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Add file button */}
                    <div
                        className="flex mb-3 cursor-pointer rounded-lg border-2 border-dashed border-[#c9cbcf] w-[100px] h-[100px]"
                    >
                        <label
                            className="flex flex-col items-center justify-center gap-2 w-[100px] h-[100px]"

                        >
                            <TbPlus size={36} />
                            <input
                                type="file"
                                accept=".pdf"
                                multiple
                                className="absolute top-0 left-0 h-[100px] w-[100px] opacity-0 cursor-pointer"

                                onChange={handleAddAttachment}
                            />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MultipleFileUploader;

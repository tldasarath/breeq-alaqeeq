import React from 'react';
import { ClipboardList, SlidersHorizontal, Cpu, RotateCw, Sparkles } from 'lucide-react';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';

import workProcessImage from '../../assets/images/work/how-we-work.webp';

const steps = [
    {
        id: 1,
        title: 'Site Inspection & Requirement Assessment',
        description: 'We begin with a detailed site inspection to understand your exact requirements, technical conditions, and project scope.',
        icon: <ClipboardList className="w-8 h-8 text-white" />,
    },
    {
        id: 2,
        title: 'Clear Quotation & Timeline',
        description: "After the assessment, we provide a transparent and detailed quotation with no hidden costs. You'll receive a clear project timeline outlining each phase.",
        icon: <SlidersHorizontal className="w-8 h-8 text-white" />,
    },
    {
        id: 3,
        title: 'Skilled Execution & Supervision',
        description: 'Our experienced technicians and supervisors carry out the work with precision, following industry standards and safety protocols.',
        icon: <Cpu className="w-8 h-8 text-white" />,
    },
    {
        id: 4,
        title: 'Quality Check & Handover',
        description: 'Before completion, we conduct thorough quality checks to ensure everything meets our standards and your expectations. the project is formally handed and customer satisfied.',
        icon: <RotateCw className="w-8 h-8 text-white" />,
    },
];

const WorkProcess = () => {
    return (
        <section className="relative py-10 md:py-20 bg-[#FAF5F5]">
            {/* Desktop Breakout Image - Flush Left, Outside Container */}
            {/* Added top-10/md:top-20 and bottom-10/md:bottom-20 to match section padding */}
            <div className="hidden lg:block absolute left-0 top-10 bottom-10 md:top-20 md:bottom-20 w-[35%] z-0">
                <img
                    src={workProcessImage}
                    alt="Work Process"
                    className="w-full h-full object-cover shadow-2xl rounded-tr-2xl rounded-br-2xl"
                />
                <div className="absolute inset-0 bg-black/10 rounded-tr-2xl rounded-br-2xl"></div>
                {/* Decorative Element */}
                <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#1183C8]/10 h-full hidden xl:block"></div>
            </div>

            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

                    {/* Spacer for Desktop Image (creates the whitespace in the container to avoid overlap) */}
                    <div className="hidden lg:block lg:col-span-4"></div>

                    {/* Mobile Only: Image Panel */}
                    <div className="lg:hidden w-full relative h-[400px] mb-8 rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src={workProcessImage}
                            alt="Work Process"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/10"></div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="lg:col-span-8 flex flex-col justify-center">
                        <div className="mb-12">
                            <div className="flex items-center gap-2 mb-3">
                                <SectionHeader title="How We Work" />
                            </div>
                            <h2 className="text-4xl md:text-[2.5rem] font-bold text-gray-900">
                                Our Simple & Reliable <span className="text-[#1183C8]">Work Process</span>
                            </h2>
                        </div>

                        <div className="relative">
                            {/* Vertical Line - adjusted for padding */}
                            <div className="absolute left-12 top-8 bottom-8 w-px border-l-2 border-dashed border-blue-200 hidden md:block"></div>

                            <div className="space-y-6">
                                {steps.map((step, index) => (
                                    <div
                                        key={step.id}
                                        className="relative flex flex-col md:flex-row gap-6 p-4 rounded-xl group"
                                    >
                                        {/* Icon Circle */}
                                        <div className="flex-shrink-0 relative z-10 transition-transform duration-300 group-hover:scale-105">
                                            <div className="w-16 h-16 bg-[#0E407C] rounded-full flex items-center justify-center shadow-lg border-4 border-white transition-colors duration-300">
                                                {step.icon}
                                            </div>
                                        </div>

                                        {/* Text Content */}
                                        <div className="pt-2 w-full">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2 transition-colors duration-300">
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed mb-6">
                                                {step.description}
                                            </p>

                                            {/* Separator Line (always visible) */}
                                            {index !== steps.length - 1 && (
                                                <div className="w-full h-px bg-gray-200"></div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default WorkProcess;

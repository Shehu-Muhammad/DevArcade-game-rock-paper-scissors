import { Option, options, RPS } from '@/components/Choices';

type CPUChoiceProps = {
  cpuChoice: RPS | null; // CPU's selected choice
  submitted: boolean; // whether player has submitted
};

export default function CPUChoice({ cpuChoice, submitted }: CPUChoiceProps) {
  if (!submitted || !cpuChoice) return null; // hide until submit

  const cpuOption: Option | undefined = options.find(
    (opt) => opt.value === cpuChoice,
  );

  if (!cpuOption) return null; // safety check

  const { label, Icon } = cpuOption;

  return (
    <div className='flex items-center gap-2 text-xl font-bold mt-4'>
      <span>CPU chose:</span>
      <Icon size={32} />
      <span>{label}</span>
    </div>
  );
}

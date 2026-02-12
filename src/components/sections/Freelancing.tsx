export default function Freelancing() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <p className="font-semibold text-lg">
          Professional Freelancing Strategy
        </p>
        <ul className="list-disc ml-5 space-y-3">
          <li>
            <strong>Platforms:</strong> Scale your reach using{" "}
            <a
              href="https://www.upwork.com"
              className="text-blue-600 hover:underline"
            >
              Upwork
            </a>
            ,{" "}
            <a
              href="https://www.fiverr.com"
              className="text-blue-600 hover:underline"
            >
              Fiverr
            </a>
            , and{" "}
            <a
              href="https://mercor.com"
              className="text-blue-600 hover:underline"
            >
              Mercor
            </a>
            .
          </li>
          <li>
            <strong>Word of Mouth:</strong> Can be a strong lead generator
            especially with parents etc. Sometimes people just want you to show
            them how to use their computer.
          </li>
          <li>
            <strong>Billing Strategy:</strong> Focus on{" "}
            <strong>hourly charging</strong>—this is especially vital for{" "}
            <strong>in-person work</strong> to ensure you are compensated for
            all "on-site" time and scope creep.
          </li>
        </ul>
      </div>

      <div className="pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-700 italic">
          Need to map out a project? Use my{" "}
          <a
            href="https://docs.google.com/presentation/d/16oks3qcIFuduKPTuQJI1LElEfQ09EM8Nuky3Hy2djyE/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-bold hover:underline"
          >
            Brainstorming Template
          </a>
          .
        </p>
      </div>
    </div>
  );
}

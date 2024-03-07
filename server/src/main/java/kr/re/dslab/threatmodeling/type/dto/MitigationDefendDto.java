package kr.re.dslab.threatmodeling.type.dto;

import lombok.Data;

import java.util.List;

@Data
public class MitigationDefendDto {

    private String mitigationId;

    private List<MitigationDefendDefendDto> relatedDefendTechniques;

}
